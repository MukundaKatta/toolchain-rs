import { describe, it, expect } from "vitest";
import { Toolchain } from "../src/core.js";
describe("Toolchain", () => {
  it("init", () => { expect(new Toolchain().getStats().ops).toBe(0); });
  it("op", async () => { const c = new Toolchain(); await c.bundle(); expect(c.getStats().ops).toBe(1); });
  it("reset", async () => { const c = new Toolchain(); await c.bundle(); c.reset(); expect(c.getStats().ops).toBe(0); });
});
