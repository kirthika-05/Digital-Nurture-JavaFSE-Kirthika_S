package com.example;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class AAATest {

    private Calculator calculator;
    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup completed");
    }
    @Test
    public void testAdd() {
        int a = 10;
        int b = 20;
        int result = calculator.add(a, b);
        assertEquals(30, result);
    }
    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown completed");
    }
}