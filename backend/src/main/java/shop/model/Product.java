package shop.model;

import org.springframework.data.annotation.Id;

import lombok.Data;

/**
 * @author jehanzebqayyum
 *
 */
public @Data class Product {
	@Id
	private final long id;
	private final String name;
	private final double price;
}
