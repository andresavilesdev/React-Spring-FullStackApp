package com.fs.backend_products.products.services;

import com.fs.backend_products.products.dtos.ProductDto;

import java.util.List;
import java.util.Optional;

public interface IProductService {

    void save(ProductDto product);

    void delete(Long id);

    Optional<ProductDto> findById(Long id);

    List<ProductDto> findAll();

}
