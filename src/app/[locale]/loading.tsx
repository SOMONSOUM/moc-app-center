export default function Loading() {
  return (
    <div className="inset-0 flex min-h-screen items-center justify-center p-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold leading-[1.2]">កំពុងដំណើរការ</h1>
        </div>

        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-primary" />

        <div className="mt-8">
          <p className="text-lg">សូមមេត្តារង់ចាំ</p>
        </div>
      </div>
    </div>
  );
}
