import Image from "next/image";
import { bio_data } from "../data";

export default function Bio() {
  return (
    <div className="flex flex-col items-start justify-center gap-3.25">
      <Image
        src={bio_data.image_url ?? ""}
        className="object-cover rounded-lg"
        alt="Bio Image"
        width={600}
        height={350}
      />
      <p className="w-full base whitespace-pre-wrap">{bio_data.description}</p>
    </div>
  );
}
