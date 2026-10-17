package za.co.kasiorder;

public class MenuItem {
    private String item;
    private double price;
    private boolean available;

    public MenuItem(String item, double price) {
        this.item = item;
        this.price = price;
        this.available = true;
    }

    public String getItem() {
        return item;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        if (price <= 0) {
            throw new IllegalArgumentException("Price must be greater than 0");
        }
        this.price = price;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setUnvailable(boolean available) {
        this.available = false;
    }

    public void setAvailable(boolean available) {
        this.available = true;
    }
}
