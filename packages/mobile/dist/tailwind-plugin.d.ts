interface PluginOptions {
    packageName?: string;
}
declare const createPlugin: (options?: PluginOptions) => {
    handler: import("tailwindcss/types/config").PluginCreator;
    config?: Partial<import("tailwindcss/types/config").Config> | undefined;
};
export default createPlugin;
//# sourceMappingURL=tailwind-plugin.d.ts.map