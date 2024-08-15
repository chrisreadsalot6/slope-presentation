'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BNPLIntegrationSlides = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = [
		{
			title: 'Integration Overview & Timeline',
			content: [
				'Phase 1 (Day 1-2): Technical Integration',
				'Phase 2 (Day 3): Testing & QA',
				'Phase 3 (Day 4): Soft Launch',
				'Phase 4 (Day 5): Full Rollout & Marketing',
				'Key Milestones:',
				'• API integration completion',
				'• User interface updates',
				'• Training program',
				'• Store-by-store rollout',
			],
		},
		{
			title: 'Technical & Product Considerations',
			content: [
				'API Integration:',
				'• Payment gateway compatibility',
				'• Real-time credit decision engine',
				'• Secure data transmission (PCI DSS compliance)',
				'User Experience:',
				'• Seamless checkout process integration: small footprint',
				'• Mobile responsiveness',
				'• Additional BNPL option visibility',
				'Product Offering:',
				'• Define eligible purchase amounts',
				'• Set custom repayment terms (e.g., 4 installments over 6 weeks)',
				'• Determine interest rates and fees',
			],
		},
		{
			title: 'Financial, Adoption & Support',
			content: [
				'Financial Considerations:',
				'• Expected increase in average order value (15-30%)',
				'• Projected sales volume increase (10-20%)',
				'Customer Adoption:',
				'• In-store & digital signage',
				'Slope Support:',
				'• Dedicated BNPL support team: for Home Depot employees & customers',
				'• Industry-leading SLAs',
				'• Clear communication',
				'Key Resources:',
				'• Slope playground: https://demo.slopepay.com/ ',
				'• Slope developer documentation: https://developers.slope.so/',
				'• Slope merchant dashboard: https://dashboard.sandbox.slope.so/',
				'• Slope case studies: https://slope.so/case-studies',
				'• Slope contact: support@slopepay.com',
			],
		},
	];

	const nextSlide = () =>
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	const prevSlide = () =>
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

	return (
		<div className="h-screen w-screen bg-gradient-to-br from-orange-500 to-red-700 flex items-center justify-center p-8">
			<div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 max-w-4xl w-full shadow-2xl">
				<h1 className="text-5xl font-bold text-white mb-2 text-center">
					Slope & Home Depot
				</h1>
				<h2 className="text-3xl font-semibold text-white mb-6 text-center">
					{slides[currentSlide].title}
				</h2>
				<ul className="text-white space-y-2 mb-8">
					{slides[currentSlide].content.map((point, index) => (
						<li key={index} className="text-base">
							{point}
						</li>
					))}
				</ul>
				<div className="flex justify-between items-center">
					<button
						onClick={prevSlide}
						className="text-white hover:text-gray-300 transition-colors"
					>
						<ChevronLeft size={28} />
					</button>
					<div className="text-white text-lg">
						Slide {currentSlide + 1} of {slides.length}
					</div>
					<button
						onClick={nextSlide}
						className="text-white hover:text-gray-300 transition-colors"
					>
						<ChevronRight size={28} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default BNPLIntegrationSlides;
