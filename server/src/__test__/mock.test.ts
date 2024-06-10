import db from "../config/db";
import { connectDB } from "../server";

jest.mock("../config/db");

describe("connect DB", () => {
  it("should connect to the database", async () => {
    jest
      .spyOn(db, "authenticate")
      .mockRejectedValue(new Error("Connection failed"));

    const consoleSpy = jest.spyOn(console, "log");

    await connectDB();

    expect(consoleSpy).toHaveBeenCalledWith(
      "Unable to connect to the database: Error: Connection failed"
    );
  });
});
