import { ComponentType, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { setupStore } from "@/store";

const container = document.getElementById("root") as HTMLElement;
const store = setupStore();
const root = createRoot(container);

function render(App: ComponentType) {
    root.render(
        <Provider store={store}>
            <StrictMode>
                <HelmetProvider>
                    <App />
                </HelmetProvider>
            </StrictMode>
        </Provider>,
    );
}

export default render;
