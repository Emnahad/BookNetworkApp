package com.example.book.user;

import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
public interface TokenRepository  extends JpaRepository<Token, Integer> {
    Optional findByToken(String token);
}
