import SearchHeader from "@/components/SearchHeader";

export default function RootLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
