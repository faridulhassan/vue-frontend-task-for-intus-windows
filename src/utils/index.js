// Generate Unique Id
export const uid = () => Math.random().toString(36).slice(-6);
// Generate random color
export const randomColor = () => {
    const letters = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
