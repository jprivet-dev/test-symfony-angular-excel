<?php

namespace App\Repository;

use App\Entity\MusicGroupFileUpload;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<MusicGroupFileUpload>
 *
 * @method MusicGroupFileUpload|null find($id, $lockMode = null, $lockVersion = null)
 * @method MusicGroupFileUpload|null findOneBy(array $criteria, array $orderBy = null)
 * @method MusicGroupFileUpload[]    findAll()
 * @method MusicGroupFileUpload[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MusicGroupFileUploadRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MusicGroupFileUpload::class);
    }

    public function add(MusicGroupFileUpload $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(MusicGroupFileUpload $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return MusicGroupFileUpload[] Returns an array of MusicGroupFileUpload objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('m.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?MusicGroupFileUpload
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
