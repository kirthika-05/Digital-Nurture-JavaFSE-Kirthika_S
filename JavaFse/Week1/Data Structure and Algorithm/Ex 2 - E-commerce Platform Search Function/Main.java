public class Main {
    public static void main(String[] args) {
        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories")
        };
        Product linearResult =
                SearchOperations.linearSearch(products, 103);
        if (linearResult != null) {
            System.out.println("Linear Search Found : "
                    + linearResult.productName);
        }
        Product binaryResult =
                SearchOperations.binarySearch(products, 104);
        if (binaryResult != null) {
            System.out.println("Binary Search Found : "
                    + binaryResult.productName);
        }
    }
}