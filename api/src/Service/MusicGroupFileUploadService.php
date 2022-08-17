<?php

namespace App\Service;

use App\Entity\MusicGroupFileUpload;
use App\Repository\MusicGroupFileUploadRepository;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;

class MusicGroupFileUploadService
{
    public function __construct(
        readonly string $uploadsDirectory,
        private SluggerInterface $slugger,
        private MusicGroupFileUploadRepository $repository,
    ) {
    }

    public function save(UploadedFile $uploadedFile): void
    {
        $filename = $this->upload($uploadedFile);

        $file = new MusicGroupFileUpload();
        $file->setFilename($filename);

        $this->repository->add($file, true);
    }

    private function upload(UploadedFile $uploadedFile): string
    {
        $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
        $safeFilename = $this->slugger->slug($originalFilename);
        $fileName = $safeFilename.'-'.uniqid().'.'.$uploadedFile->guessExtension();
        $uploadedFile->move($this->uploadsDirectory, $fileName);

        return $fileName;
    }
}
