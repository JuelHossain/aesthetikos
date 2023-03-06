import { useEffect } from "react";

export default function useSetPageTitle(title) {
  useEffect(() => {
    window.document.title = `Aesthetikos | ${title}`;
  }, [title]);
}
