import { useState } from 'react';
import { motion } from 'framer-motion';
import { productsData, productCategories } from '../data/productsData';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts =
        selectedCategory === 'all'
            ? productsData
            : productsData.filter((p) => p.category === selectedCategory);

    return (
        <div className="min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero/products.jpg"
                        alt="Our Products"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-asphalt-grey-900/60"></div>
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                            Our Products
                        </h1>
                        <p className="text-xl text-asphalt-grey-200 leading-relaxed">
                            Comprehensive range of 50+ road safety products meeting government standards
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-white sticky top-20 z-30 border-b border-asphalt-grey-200">
                <div className="container-custom">
                    <div className="flex overflow-x-auto space-x-3 pb-2">
                        {productCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex-shrink-0 px-6 py-3 rounded-lg font-semibold transition-all ${selectedCategory === category.id
                                    ? 'bg-safety-orange-600 text-white shadow-lg'
                                    : 'bg-asphalt-grey-100 text-asphalt-grey-700 hover:bg-asphalt-grey-200'
                                    }`}
                            >
                                <span className="mr-2">{category.icon}</span>
                                {category.name}
                                <span className="ml-2 text-sm opacity-75">({category.count})</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="section-padding bg-asphalt-grey-50">
                <div className="container-custom">
                    <div className="mb-6 text-center">
                        <p className="text-asphalt-grey-600">
                            Showing <span className="font-bold text-safety-orange-600">{filteredProducts.length}</span> products
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="card card-hover cursor-pointer"
                                onClick={() => setSelectedProduct(product)}
                            >
                                <div className="aspect-square bg-asphalt-grey-100 rounded-lg mb-4 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <span className="inline-block px-3 py-1 bg-safety-orange-100 text-safety-orange-700 text-xs font-semibold rounded-full mb-2">
                                    {product.categoryName}
                                </span>
                                <h3 className="text-lg font-bold text-asphalt-grey-900 mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-asphalt-grey-600 mb-3 line-clamp-2">
                                    {product.description}
                                </p>
                                <div className="text-safety-orange-600 font-semibold flex items-center text-sm">
                                    View Details
                                    <span className="ml-2">→</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-asphalt-grey-500 text-lg">
                                No products found in this category
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Product Detail Modal */}
            {selectedProduct && (
                <div
                    className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedProduct(null)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className="inline-block px-3 py-1 bg-safety-orange-100 text-safety-orange-700 text-xs font-semibold rounded-full mb-3">
                                        {selectedProduct.categoryName}
                                    </span>
                                    <h2 className="text-3xl font-display font-bold text-asphalt-grey-900">
                                        {selectedProduct.name}
                                    </h2>
                                </div>
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="text-asphalt-grey-500 hover:text-asphalt-grey-700 text-3xl"
                                >
                                    ×
                                </button>
                            </div>

                            <div className="aspect-video bg-asphalt-grey-100 rounded-lg mb-6 overflow-hidden">
                                <img
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <p className="text-asphalt-grey-700 mb-6 leading-relaxed">
                                {selectedProduct.description}
                            </p>

                            <h3 className="text-xl font-bold text-asphalt-grey-900 mb-3">
                                Specifications
                            </h3>
                            <ul className="space-y-2 mb-6">
                                {selectedProduct.specifications.map((spec, index) => (
                                    <li key={index} className="flex items-start text-asphalt-grey-700">
                                        <span className="text-highway-green-600 mr-2">✓</span>
                                        <span>{spec}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center justify-between pt-6 border-t border-asphalt-grey-200">
                                <span className="text-lg font-bold text-asphalt-grey-900">
                                    {selectedProduct.price}
                                </span>
                                <a href="/contact" className="btn-primary">
                                    Request Quote
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* CTA Section */}
            <section className="section-padding bg-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-asphalt-grey-900 mb-6">
                        Looking for Specific Products?
                    </h2>
                    <p className="text-xl text-asphalt-grey-600 mb-8 max-w-2xl mx-auto">
                        We have 50+ road safety products. Contact us for complete catalog
                    </p>
                    <a href="/contact" className="btn-primary">
                        Request Product Catalog
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Products;
