package shop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import shop.model.Product;
import shop.repo.ProductRepository;

@RestController
@CrossOrigin(origins = "*")
@Api(value = "the shop")
public class ProductController {
	@Autowired
	ProductRepository productRepo;

	@ApiOperation(value = "Get all Products", response = Product.class)
	@RequestMapping(value = "/products", method = RequestMethod.GET)
	public List<Product> getProducts() {
		return productRepo.findAll();
	}
}
