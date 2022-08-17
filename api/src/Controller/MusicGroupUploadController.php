<?php

namespace App\Controller;

use App\Form\MusicGroupFileUploadType;
use App\Service\MusicGroupFileUploadService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Exception\InvalidArgumentException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class MusicGroupUploadController extends AbstractController
{
    #[Route('/api/music-groups/upload', name: 'api_music_groups_upload', methods: ['POST'])]
    public function upload(Request $request, MusicGroupFileUploadService $fileUpload): JsonResponse
    {
        $requestFile = $request->files->get('file');

        $form = $this->createForm(MusicGroupFileUploadType::class);

        $form->submit([
            'file' => $requestFile,
        ]);

        if ($form->isSubmitted() && $form->isValid()) {
            $uploadedFile = $form->get('file')->getData();

            if (!$uploadedFile) {
                throw new InvalidArgumentException('file field does not empty.');
            }

            $fileUpload->save($uploadedFile);
        }

        throw new InvalidArgumentException($form->getErrors(true));
    }
}
