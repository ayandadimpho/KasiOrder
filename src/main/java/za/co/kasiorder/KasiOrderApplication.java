package za.co.kasiorder;

public class KasiOrderApplication {
    public static void main(String[] args) {
        MenuItem item1 = new MenuItem("Kota", 20.00);
        MenuItem item2 = new MenuItem("Chips", 15.00);
        MenuItem item3 = new MenuItem("Russian", 10.00);
        MenuItem item4 = new MenuItem("Chips", 15.00);

        Menu menu = new Menu();
        try {
            menu.addItem(item1);
            menu.addItem(item2);
            menu.addItem(item3);
            menu.addItem(item4);
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }


        for (int i=0; i<menu.getMenu().size(); i++) {
            System.out.println(menu.getMenu().get(i).getItem() + ": " + menu.getMenu().get(i).getPrice());
        }
    }
}
