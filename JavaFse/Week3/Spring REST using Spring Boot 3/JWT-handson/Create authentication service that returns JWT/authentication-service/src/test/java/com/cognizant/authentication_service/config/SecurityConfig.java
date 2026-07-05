package com.cognizant.authentication_service.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                .csrf(csrf -> csrf.disable())

                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/authenticate").hasAnyRole("USER", "ADMIN")
                        .anyRequest().authenticated()
                )

                .httpBasic(Customizer.withDefaults())
                .formLogin(form -> form.disable());

        return http.build();
    }
    @Bean
    public org.springframework.security.core.userdetails.UserDetailsService userDetailsService() {

        var user = org.springframework.security.core.userdetails.User
                .withUsername("user")
                .password("{noop}pwd")
                .roles("USER")
                .build();

        var admin = org.springframework.security.core.userdetails.User
                .withUsername("admin")
                .password("{noop}pwd")
                .roles("ADMIN")
                .build();

        return new org.springframework.security.provisioning.InMemoryUserDetailsManager(user, admin);
    }
}