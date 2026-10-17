package za.co.kasiorder;
import java.util.List;
import java.util.ArrayList;

public class Menu {
    private List<MenuItem> items = new ArrayList<>();

    public void addItem(MenuItem item1) {
        for (MenuItem item: items) {
            if (item.getItem().equals(item1.getItem())) {
                throw new IllegalArgumentException("A menu item with this name already exists!");
            }
        }
        items.add(item1);
    }

    public List<MenuItem> getMenu() {
        return items;
    }

}
