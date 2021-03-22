package world.ucode.model;

import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.IOException;

public class Pixelate {
    public static BufferedImage pixelate(BufferedImage source, int range) throws IOException {
        BufferedImage result = new BufferedImage(source.getWidth(), source.getHeight(), source.getType());

        for (int y = 0; y < source.getHeight(); y++) {
            for (int x = 0; x < source.getWidth(); x++) {

                Color color = new Color(source.getRGB(x, y));

                int blue = color.getBlue();
                int red = color.getRed();
                int green = color.getGreen();

                if (red >= 100)
                    red -= range;
                if (blue >= 100)
                    blue -= range;
                if (green >= 100)
                    green -= range;

                int grey = (int) (red * 0.299 + green * 0.587 + blue * 0.114);

                Color newColor = new Color(grey, grey, grey);
                result.setRGB(x, y, newColor.getRGB());
            }
        }

        return result;
    }
}
