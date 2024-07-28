function App() {
  return (
    <>
      <div className="container mx-auto text-white">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <header className="border-b-2 mb-7 py-5">
              <h1 className="text-center">note Header</h1>
            </header>
            <main className="grid grid-cols-12">
              <div className="col-span-4">
                <h1 className="text-center text-lg mb-5">Add New Note</h1>
                <form className="flex flex-col gap-y-5 mx-5" >
                  <input
                    className="bg-neutral-600 p-2 rounded-lg"
                    type="text"
                  />
                  <input
                    className="bg-neutral-600 p-2 rounded-lg"
                    type="text"
                  />
                  <div className="w-full">
                    <button className="bg-blue-800 hover:bg-blue-700 w-full py-3 text-sm">
                      Add New Note
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-span-8 bg-green-900">NoteList</div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
