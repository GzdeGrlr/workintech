import "./App.css";
import background from "./assets/image20.png";
import dashboardImage from "./assets/Dashboard3.png";
import yildizli from "./assets/yildizli.svg";
import yildiz from "./assets/yildiz.png";

function App() {
  return (
    <div className="min-h-screen bg-cover bg-center relative">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 z-[-1] bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`,
          clipPath: "polygon(0 0, 100% 0, 100% 69%, 0 86%)",
        }}
      ></div>
      <div className="container mx-auto p-8">
        <header className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Workintech</div>
          <nav className="space-x-6">
            <a href="#" className="text-white hover:underline">
              Anasayfa
            </a>
            <a href="#" className="text-white hover:underline">
              Şirket
            </a>
            <a href="#" className="text-white hover:underline">
              Programlar
            </a>
            <a href="#" className="text-white hover:underline">
              Kaynaklar
            </a>
            <a href="#" className="text-white hover:underline">
              Yardım
            </a>
          </nav>
          <div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full mr-4 hover:bg-blue-600">
              Başvur
            </button>
            <button className="bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-gray-100">
              Giriş
            </button>
          </div>
        </header>

        <main className="flex flex-col md:flex-row justify-between md:mt-36">
          <div className="max-w-lg text-white">
            <p className="border border-solid rounded-full inline-flex items-center gap-2 px-4 py-1 text-[14px]">
              <img src={yildizli} className="w-4 h-4" alt="icon" />
              EARLY ACCESS
            </p>
            <h1 className="text-6xl tracking-normal md:tracking-wide font-bold mb-6">
              Yazılım öğrenmenin <br />
              en kolay yolu.
            </h1>
            <p className="mb-6 text-[24px]">
              Kişiye özel, yapay zeka destekli, <br />
              tamamen uygulama odaklı eğitim.
            </p>
            <div className="bg-white/[.15] backdrop-blur-[2px] rounded-[24px] px-6 md:px-10 py-4 inline-flex items-center gap-3">
              <img src={yildiz} className="w-8 h-8" alt="icon" />
              <p className="flex flex-col gap-2">
                <span className="text-white font-semibold text-[18px] ">
                  Erken erişim fiyatı:
                </span>
                <div className="flex items-center gap-3 text-[18px]">
                  <s>1200 TL</s>
                  <span className="text-white font-semibold text-base text-[18px]">
                    800 TL / Ay
                  </span>
                </div>
              </p>
            </div>
            <button className="block bg-blue-500 text-white font-semibold py-2 px-14 rounded-xl text-lg hover:bg-blue-600 mt-6 text-[16px]">
              SATIN AL
            </button>
          </div>

          <div className="mt-8 md:mt-0">
            <img
              src={dashboardImage}
              alt="Dashboard Preview"
              className="rounded-2xl"
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
