<?php

namespace App\Controller;

use App\Entity\MusicGroupData;
use App\Repository\MusicGroupDataRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Exception\InvalidArgumentException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\SerializerInterface;

class MusicGroupDataController extends AbstractController
{
    #[Route('/api/music-groups/data', name: 'app_music_groups_data_read', methods: ['GET'])]
    public function read(MusicGroupDataRepository $dataRepository, SerializerInterface $serializer): JsonResponse
    {
        $data = $dataRepository->findAll();
        $json = $this->getJson($serializer, $data);

        return new JsonResponse($json, Response::HTTP_OK, [], true);
    }

    #[Route('/api/music-groups/data/{id}', name: 'app_music_groups_data_delete', methods: ['DELETE'])]
    public function delete(MusicGroupData $data, MusicGroupDataRepository $dataRepository): JsonResponse
    {
        $dataRepository->remove($data, true);

        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }

    #[Route('/api/music-groups/data', name: 'app_music_groups_data_create', methods: ['POST'])]
    public function create(
        Request $request,
        MusicGroupDataRepository $dataRepository,
        SerializerInterface $serializer
    ): JsonResponse {

        /** @var MusicGroupData $data */
        $data = $serializer->deserialize($request->getContent(), MusicGroupData::class, 'json');

        $alreadyExists = $dataRepository->findBy([
            'nomDuGroupe' => $data->getNomDuGroupe(),
        ]);

        if (count($alreadyExists) > 0) {
            throw new InvalidArgumentException(sprintf('Le groupe "%s" existe déjà.', $data->getNomDuGroupe()));
        }

        $dataRepository->add($data, true);
        $json = $this->getJson($serializer, $data);

        return new JsonResponse($json, Response::HTTP_CREATED, [], true);
    }

    #[Route('/api/music-groups/data/{id}', name: 'app_music_groups_data_update', methods: ['PUT'])]
    public function update(
        Request $request,
        MusicGroupData $currentData,
        MusicGroupDataRepository $dataRepository,
        SerializerInterface $serializer
    ): JsonResponse {
        $data = $serializer->deserialize(
            $request->getContent(),
            MusicGroupData::class,
            'json',
            [AbstractNormalizer::OBJECT_TO_POPULATE => $currentData]
        );

        // TODO: vérifier que le nom du groupe mis à jour n'existe n'est pas déjà pris.

        $dataRepository->add($data, true);
        $json = $this->getJson($serializer, $data);

        return new JsonResponse($json, Response::HTTP_OK, [], true);
    }

    private function getJson(SerializerInterface $serializer, array|MusicGroupData $data): string
    {
        // TODO: Tricks. À définir plutôt dans un custom serializer dédier à MusicGroupData (uniquement pour anneeDebut & anneeSeparation).
        return $serializer->serialize($data, 'json', [
            DateTimeNormalizer::FORMAT_KEY => 'Y',
        ]);
    }
}
