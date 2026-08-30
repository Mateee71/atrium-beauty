import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import { services } from "../data";
import backgroundAccentImage from "@/assets/images/atrium_beauty_logo_flower_17353232632353.png"
import devTop from "@/assets/images/home-dev-top.BgWcz0RR.svg"

export default function ServicesSection() {
	const [, navigate] = useLocation();

	return (
		<section id="services" className="py-14 relative overflow-hidden scroll-mt-24">
			<div className="absolute left-0 bottom-[95%] w-full">
				<img src={devTop} alt="devTop" className="h-[66px] w-full"/>
			</div>
			<div className="absolute left-0 bottom-0 w-full transform scale-y-[-1]">
				<img src={devTop} alt="devTop" className="h-[66px] w-full"/>
			</div>
			<div className="bg-atrium-cream">
			<img
				src={backgroundAccentImage}
				alt=""
				className="absolute left-[30px] top-[60px] w-[180px] h-auto opacity-10 grayscale pointer-events-none select-none rotate-15 z-0"
			/>
			<img
				src={backgroundAccentImage}
				alt=""
				className="absolute right-[50px] top-[250px] w-[220px] h-auto opacity-10 grayscale pointer-events-none select-none -rotate-25 z-0"
			/>
			<img
				src={backgroundAccentImage}
				alt=""
				className="absolute left-[400px] top-[150px] w-[150px] h-auto opacity-10 grayscale pointer-events-none select-none rotate-45 z-0"
			/>
			<img
				src={backgroundAccentImage}
				alt=""
				className="absolute right-[200px] bottom-[80px] w-[200px] h-auto opacity-10 grayscale pointer-events-none select-none -rotate-180 z-0"
			/>
			<img
				src={backgroundAccentImage}
				alt=""
				className="absolute left-[250px] bottom-[200px] w-[250px] h-auto opacity-10 grayscale pointer-events-none select-none rotate-45 z-0"
			/>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-serif font-bold atrium-charcoal mb-4 pt-2">
						Szolgáltatásaink
					</h2>
					<div className="w-24 h-1 bg-atrium-rose mx-auto"></div>
				</div>

				<div className="grid lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<div
							key={index}
							className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 z-40"
						>
							<img
								src={service.image}
								alt={service.alt}
								className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
							/>
							<div className="p-8">
								<h3 className="text-2xl font-serif font-semibold atrium-charcoal mb-4">
									{service.title}
								</h3>
								<p className="text-gray-600 mb-6">
									{service.description}
								</p>
								<a
									onClick={() => navigate(`/service/${service.id}`)}
									className="inline-flex items-center atrium-rose hover:opacity-80 transition-colors duration-300 group cursor-pointer"
								>
									További információ és árak
									<ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>			
			</div>
		</section>
	);
}
