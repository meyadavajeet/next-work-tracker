import { NextResponse } from "next/server";

export const sendResponse = (
  success,
  data = null,
  message = null,
  status = 200,
  statusText = "OK"
) => {
  return NextResponse.json(
    {
      success: success,
      message: message || null,
      data: data || null,
    },
    {
      status: status || 200,
      statusText: statusText || "OK",
    }
  );
};
