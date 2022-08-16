<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class MusicGroupUploadController extends AbstractController
{
    #[Route('/api/music-groups/upload', name: 'api_music_groups_upload')]
    public function index(): JsonResponse
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/MusicGroupUploadController.php',
        ]);
    }
}
