import { useState } from "react";
import cookies from "js-cookie";

const MAP_VALUES = {
    RED: "red",
    GREEN: "green",
    BLUE: "blue",
};

const KEYS = Object.values(MAP_VALUES);

const COOKIE = "THEME_COLOR";

const defaultValue = cookies.get(COOKIE) || MAP_VALUES.BLUE;

/**
 * @variant "red"
 * @variant "green"
 * @variant "blue"
 */
export function useSwitch() {
    const [color, setColor] = useState(defaultValue);

    const onToggle = () => {
        const idx = KEYS.indexOf(color);
        const nextIdx = (idx + 1) % KEYS.length;
        const nextTheme = KEYS[nextIdx];
        setColor(nextTheme);
        cookies.set(COOKIE, nextTheme);
    };

    return { color, setColor, onToggle };
}
