package shop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import shop.model.Product;
import shop.repo.ProductRepository;

@SpringBootApplication
public class Application implements CommandLineRunner {
	@Autowired
	private ProductRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Override
	public void run(String... arg0) throws Exception {
		repository.deleteAll();

		repository.save(new Product(1, "soap", 10));
		repository.save(new Product(2, "towel", 5));
		repository.save(new Product(3, "shower", 15));
		repository.save(new Product(4, "mat", 20));
		repository.save(new Product(5, "curtain", 2));
		repository.save(new Product(6, "plate", 1));
		repository.save(new Product(7, "cup", 1));
		repository.save(new Product(8, "bed", 50));
	}
}
