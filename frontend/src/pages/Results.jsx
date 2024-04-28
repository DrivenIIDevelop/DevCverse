import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";
import Footer from "../components/Footer";

const resultImg =
  "https://s3-alpha-sig.figma.com/img/5bb0/7092/b384be8a2e539400446105d47e1cc353?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oj~TlWzE8JlGVZ~wAGtCqcWueFRy5tZ0GWzBAbgAEWi1xJEugswAKBiOe7Y0JbCHNLAKkbaN6UYaVvB5XDR9r8n6mMG-AGKjexhkY9j9br7vkm9SsGpUp5h5ClswVZG4zzA~nHS3c6qatkdlWxK3UFjXayh2uROanSjn55rtSk87gocMa0lhU9x2Aygqq2xQRV8OHE5Mz6RIsvBfJAEroHarfmwOBWOWEi~Qs76aHQ8ogRgCm5A3Ub4A2K0BBHUv2so~YfY8EtGITMjyLzyQL-8GVZHcEOua-FYkhPs-X8wKeQb7LeIg9R2ju0vQIEqGQOt-4o5lRIhtdw5p1LBu9A__";

export default function Results() {
  const { user } = useUserContext();
  const { getUser } = useUserContext();
  // const { user } = getUser();

  // console.log("user in Results component: ", user);

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="px-16">
      <div className="flex flex-col items-center py-8 font-serif text-[40px] font-semibold text-[#666]">
        <h1>Great News {user.User.first_name}! Here are</h1>
        <h1>your results:</h1>
      </div>

      <div className="grid grid-cols-[3fr,2fr] mb-16">
        <img src={resultImg} alt="image" />
        <div className="p-10 bg-gradient-to-br from-white via-[#EFEFEF] to-gray-200 flex flex-col justify-between">
          <p>Skin type: </p>
          <p>Concerns: </p>
          <p>Products: </p>
          <p>Serums: </p>
          <p>Remember: </p>
          <p>Quick Tips: </p>
          <p>additional notes</p>
          <Link
            to="/"
            className="border border-[#262626] font-sans text-base text-[#262626] py-2 px-16 rounded-lg "
          >
            Let&apos;s get started for your journey!
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
