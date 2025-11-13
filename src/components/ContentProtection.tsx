import { useEffect } from "react";

const ContentProtection = () => {
  useEffect(() => {
    // Disable right-click context menu
    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable text selection via mouse
    const disableSelection = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Disable copy
    const disableCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable drag on images
    const disableDrag = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable keyboard shortcuts (Ctrl+C, Ctrl+A, Ctrl+S, etc.)
    const disableKeyboardShortcuts = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "c" || e.key === "a" || e.key === "s" || e.key === "x" || e.key === "u")
      ) {
        e.preventDefault();
        return false;
      }
      // Disable F12 and other dev tools shortcuts
      if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
        return false;
      }
    };

    // Add event listeners
    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("selectstart", disableSelection);
    document.addEventListener("copy", disableCopy);
    document.addEventListener("cut", disableCopy);
    document.addEventListener("dragstart", disableDrag);
    document.addEventListener("keydown", disableKeyboardShortcuts);

    // Cleanup on unmount
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("selectstart", disableSelection);
      document.removeEventListener("copy", disableCopy);
      document.removeEventListener("cut", disableCopy);
      document.removeEventListener("dragstart", disableDrag);
      document.removeEventListener("keydown", disableKeyboardShortcuts);
    };
  }, []);

  return null;
};

export default ContentProtection;
