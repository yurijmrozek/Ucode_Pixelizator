package world.ucode.model;

import java.awt.*;
import java.awt.image.BufferedImage;

public class Pixelate {
    public static BufferedImage pixelate(BufferedImage source, int range) {
        BufferedImage result = new BufferedImage(source.getWidth(), source.getHeight(), source.getType());

        for (int y = 0; y < source.getHeight(); y += 2) {
            for (int x = 0; x < source.getWidth(); x += 2) {

                Color color = new Color(source.getRGB(x, y));

                int pixelColor = getPopularColor();

                Color newColor = new Color(pixelColor, pixelColor, pixelColor);
                result.setRGB(x, y, newColor.getRGB());
            }
        }

        return result;
    }

}
