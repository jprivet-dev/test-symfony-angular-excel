<?php

namespace App\Controller;

use App\Form\MusicGroupFileUploadType;
use App\Service\MusicGroupFileUploadService;
use App\Service\MusicGroupImportService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Exception\InvalidArgumentException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class MusicGroupUploadController extends AbstractController
{
    #[Route('/api/music-groups/upload', name: 'api_music_groups_upload', methods: ['POST'])]
    public function upload(
        Request $request,
        MusicGroupFileUploadService $fileUpload,
        MusicGroupImportService $importService,
        SerializerInterface $serializer
    ): JsonResponse {
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

            $file = $fileUpload->save($uploadedFile);

            // TODO: trouver la meilleure approche pour fusionner les stats dans la réponse json.
            $stats = $importService->import($file);

            $json = $serializer->serialize($file, 'json');

            return new JsonResponse($json, Response::HTTP_CREATED, [], true);
        }

        throw new InvalidArgumentException($form->getErrors(true));
    }
}
