<?php

namespace App\Controller;

use App\Repository\MusicGroupDataRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class MusicGroupDataController extends AbstractController
{
    #[Route('/api/music-groups/data', name: 'app_music_group_data', methods: ['GET'])]
    public function read(MusicGroupDataRepository $dataRepository, SerializerInterface $serializer): JsonResponse
    {
        $data = $dataRepository->findAll();
        $json = $serializer->serialize($data, 'json');

        return new JsonResponse($json, Response::HTTP_OK, [], true);
    }
}
