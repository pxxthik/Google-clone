"use client";

import React, { useState } from "react";

export default function CountryLookUp() {
  const [country, setCountry] = useState("India");
  return <div>{country}</div>;
}
