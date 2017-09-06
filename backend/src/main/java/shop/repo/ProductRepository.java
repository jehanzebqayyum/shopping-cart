package shop.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import shop.model.Product;

public interface ProductRepository extends MongoRepository<Product, String> {
}
