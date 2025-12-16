// Initial Outfit Data
const initialOutfits = [
    {
        id: 1,
        name: "Timberland Boots",
        designer: "Timberland",
        category: "shoes",
        price: 3500,
        description: "Premium leather boots with durable construction and waterproof design. Perfect for outdoor activities and casual wear. Features include padded collar for ankle support, rubber outsole for traction, and seam-sealed construction.",
        tags: ["boots", "leather", "waterproof", "casual", "outdoor"],
        images: ["images/1.jpg"],
        rating: 4.8,
        reviews: 124
    },
    {
        id: 2,
        name: "timberland",
        designer: "timberland casual",
        category: "shoes",
        price: 3500,
        description: "Stylish backpack with multiple compartments for school and daily use. Made from durable water-resistant material with padded laptop sleeve and organizational pockets.",
        tags: ["shoe", "school", "urban", "practical", "laptop"],
        images: ["images/2.jpg"],
        rating: 4.5,
        reviews: 89
    },
    {
        id: 3,
        name: "Running Sneakers",
        designer: "Nike Athletics",
        category: "shoes",
        price: 4500,
        description: "Lightweight running shoes with advanced cushioning technology. Perfect for athletes and fitness enthusiasts. Features breathable mesh upper and responsive foam midsole.",
        tags: ["running", "sports", "comfort", "athletic", "fitness"],
        images: ["images/3.jpg"],
        rating: 4.9,
        reviews: 256
    },
    {
        id: 4,
        name: "Elegant Dress",
        designer: "Luna Designs",
        category: "clothes",
        price: 2800,
        description: "Beautiful evening dress with silk fabric and elegant design. Perfect for special occasions, weddings, and formal events. Features intricate embroidery and flowing silhouette.",
        tags: ["dress", "evening", "elegant", "formal", "silk"],
        images: ["images/4.jpg"],
        rating: 4.7,
        reviews: 67
    },
    {
        id: 5,
        name: "Leather Loafers",
        designer: "Heritage Footwear",
        category: "shoes",
        price: 3200,
        description: "Classic leather loafers with comfortable insoles for all-day wear. Handcrafted from premium full-grain leather with cushioned footbed and flexible sole.",
        tags: ["loafers", "leather", "classic", "formal", "comfort"],
        images: ["images/5.jpg"],
        rating: 4.6,
        reviews: 142
    },
    {
        id: 6,
        name: "Tech Backpack",
        designer: "Digital Nomad",
        category: "bags",
        price: 3800,
        description: "Smart backpack with USB port and organized compartments for tech gear. Features include hidden anti-theft pocket, water-resistant material, and ergonomic shoulder straps.",
        tags: ["tech", "laptop", "backpack", "organized", "travel"],
        images: ["images/6.jpg"],
        rating: 4.8,
        reviews: 203
    },
    {
        id: 7,
        name: "Casual T-Shirt",
        designer: "Street Style",
        category: "clothes",
        price: 1200,
        description: "Comfortable cotton t-shirt with modern streetwear design. Made from 100% organic cotton with pre-shrunk fabric for lasting fit and comfort.",
        tags: ["t-shirt", "casual", "cotton", "streetwear", "basic"],
        images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        rating: 4.4,
        reviews: 56
    },
    {
        id: 8,
        name: "Canvas School Bag",
        designer: "Scholar Gear",
        category: "bags",
        price: 1800,
        description: "Durable canvas bag perfect for school books and supplies. Features reinforced stitching, adjustable shoulder straps, and multiple pockets for organization.",
        tags: ["canvas", "school", "durable", "affordable", "student"],
        images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        rating: 4.3,
        reviews: 78
    }      
    
];

// DOM Elements
const uploadTrigger = document.getElementById('uploadTrigger');
const uploadHeader = document.getElementById('uploadHeader');
const uploadMobile = document.getElementById('uploadMobile');
const uploadFooter = document.getElementById('uploadFooter');
const uploadSection = document.getElementById('uploadSection');
const closeUpload = document.getElementById('closeUpload');
const collectionsGrid = document.getElementById('collectionsGrid');
const categoryButtons = document.querySelectorAll('.category-btn');
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
const exploreBtn = document.getElementById('exploreBtn');
const scrollIndicator = document.querySelector('.scroll-indicator');

// Upload Form Elements
const uploadDropzone = document.getElementById('uploadDropzone');
const fileInput = document.getElementById('fileInput');
const browseFiles = document.getElementById('browseFiles');
const imagePreview = document.getElementById('imagePreview');
const uploadForm = document.getElementById('uploadForm');
const clearForm = document.getElementById('clearForm');
const uploadStatus = document.getElementById('uploadStatus');

// Popup Elements
const outfitPopup = document.getElementById('outfitPopup');
const popupOverlay = document.getElementById('popupOverlay');
const closePopup = document.getElementById('closePopup');
const popupImage = document.getElementById('popupImage');
const popupCategory = document.getElementById('popupCategory');
const popupName = document.getElementById('popupName');
const popupDesigner = document.getElementById('popupDesigner');
const popupDescription = document.getElementById('popupDescription');
const popupTags = document.getElementById('popupTags');
const popupPrice = document.getElementById('popupPrice');

// State
let uploadedImages = [];
let activeCategory = 'all';
let outfitIdCounter = initialOutfits.length + 1;
let currentOutfit = null;

// Initialize the page
function init() {
    displayOutfits(initialOutfits);
    setupEventListeners();
    filterCollections('all');
    setupMobileMenu();
    animateStats();
    setupScrollIndicator();
    setupPopup();
}

// Display outfits in the grid (Only name and price)
function displayOutfits(outfits) {
    collectionsGrid.innerHTML = '';
    
    outfits.forEach(outfit => {
        const outfitCard = createOutfitCard(outfit);
        collectionsGrid.appendChild(outfitCard);
    });
    
    // Add animation to cards
    animateCards();
}

// Create an outfit card element (Simplified - only name and price)
function createOutfitCard(outfit) {
    const card = document.createElement('div');
    card.className = 'collection-card';
    card.dataset.category = outfit.category;
    card.dataset.id = outfit.id;
    
    // Simple card with only image, name, and price
    card.innerHTML = `
        <img src="${outfit.images[0]}" alt="${outfit.name}" class="collection-img">
        <div class="collection-info">
            <h3 class="collection-name">${outfit.name}</h3>
            <div class="collection-price">
                <span class="price-label">Ksh</span> ${outfit.price.toFixed(2)}
            </div>
            <div class="view-details">
                <i class="fas fa-eye"></i> Click to view details
            </div>
        </div>
    `;
    
    // Add hover effects
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    // Add click to show popup
    card.addEventListener('click', function() {
        showOutfitPopup(outfit);
    });
    
    return card;
}

// Show outfit details popup
function showOutfitPopup(outfit) {
    currentOutfit = outfit;
    
    // Set popup content
    popupImage.src = outfit.images[0];
    popupCategory.textContent = getCategoryName(outfit.category);
    popupName.textContent = outfit.name;
    popupDesigner.textContent = outfit.designer;
    popupDescription.textContent = outfit.description;
    popupPrice.textContent = `Ksh ${outfit.price.toFixed(2)}`;
    
    // Set tags
    popupTags.innerHTML = '';
    if (outfit.tags && outfit.tags.length > 0) {
        outfit.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'tag';
            tagElement.textContent = tag;
            popupTags.appendChild(tagElement);
        });
    }
    
    // Show popup
    outfitPopup.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add animation
    setTimeout(() => {
        outfitPopup.style.opacity = '1';
    }, 10);
}

// Hide outfit details popup
function hideOutfitPopup() {
    outfitPopup.style.opacity = '0';
    setTimeout(() => {
        outfitPopup.style.display = 'none';
        document.body.style.overflow = 'auto';
        currentOutfit = null;
    }, 300);
}

// Setup popup functionality
function setupPopup() {
    // Close popup when clicking overlay or close button
    popupOverlay.addEventListener('click', hideOutfitPopup);
    closePopup.addEventListener('click', hideOutfitPopup);
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && outfitPopup.style.display === 'block') {
            hideOutfitPopup();
        }
    });
    
    // Prevent popup from closing when clicking inside the container
    document.querySelector('.popup-container').addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

// Get category display name
function getCategoryName(category) {
    const categories = {
        'clothes': 'Clothes',
        'shoes': 'Shoes',
        'bags': 'School Bags',
        'all': 'All Items'
    };
    return categories[category] || category;
}

// Filter collections by category
function filterCollections(category) {
    activeCategory = category;
    
    // Update active button
    categoryButtons.forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Show filtering animation
    collectionsGrid.classList.add('filtering');
    
    setTimeout(() => {
        const cards = collectionsGrid.querySelectorAll('.collection-card');
        let visibleCount = 0;
        
        // Filter collection cards
        cards.forEach(card => {
            const cardCategory = card.dataset.category;
            
            if (category === 'all' || cardCategory === category) {
                card.classList.remove('hidden', 'filtered-out');
                visibleCount++;
            } else {
                card.classList.add('filtered-out');
                setTimeout(() => {
                    card.classList.add('hidden');
                }, 300);
            }
        });
        
        // Remove filtering class
        collectionsGrid.classList.remove('filtering');
    }, 300);
}

// Add a new outfit to the grid
function addNewOutfit(outfitData, imageUrl) {
    const newOutfit = {
        id: outfitIdCounter++,
        name: outfitData.designName,
        designer: outfitData.designerName || 'Anonymous',
        category: outfitData.category,
        price: parseFloat(outfitData.price),
        description: outfitData.description,
        tags: outfitData.tags ? outfitData.tags.split(',').map(tag => tag.trim()) : [],
        images: [imageUrl],
        rating: 4.5,
        reviews: 0
    };
    
    // Create and add the card
    const outfitCard = createOutfitCard(newOutfit);
    
    // Add to the beginning of the grid
    collectionsGrid.insertBefore(outfitCard, collectionsGrid.firstChild);
    
    // Apply filter if active
    if (activeCategory !== 'all' && newOutfit.category !== activeCategory) {
        outfitCard.classList.add('filtered-out');
        setTimeout(() => {
            outfitCard.classList.add('hidden');
        }, 300);
    }
    
    // Animate the new card
    setTimeout(() => {
        outfitCard.style.opacity = '0';
        outfitCard.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            outfitCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            outfitCard.style.opacity = '1';
            outfitCard.style.transform = 'translateY(0)';
        }, 10);
    }, 10);
}

// Handle uploaded files
function handleFiles(files) {
    uploadedImages = [];
    imagePreview.innerHTML = '';
    
    // Process each file
    for (let i = 0; i < Math.min(files.length, 6); i++) {
        const file = files[i];
        
        // Validate file type
        if (!file.type.startsWith('image/')) {
            showStatus('Please upload only image files.', 'error');
            continue;
        }
        
        // Validate file size (10MB)
        if (file.size > 10 * 1024 * 1024) {
            showStatus(`File "${file.name}" is too large. Max size is 10MB.`, 'error');
            continue;
        }
        
        uploadedImages.push(file);
        
        // Create preview
        const reader = new FileReader();
        reader.onload = function(e) {
            const previewItem = document.createElement('div');
            previewItem.className = 'preview-item';
            
            previewItem.innerHTML = `
                <img src="${e.target.result}" alt="Preview ${i+1}">
                <button class="remove-btn" data-index="${i}">
                    <i class="fas fa-times"></i>
                </button>
            `;
            
            imagePreview.appendChild(previewItem);
            
            // Add remove functionality
            const removeBtn = previewItem.querySelector('.remove-btn');
            removeBtn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                uploadedImages.splice(index, 1);
                previewItem.remove();
                
                // Update indices
                const remainingPreviews = imagePreview.querySelectorAll('.preview-item');
                remainingPreviews.forEach((preview, idx) => {
                    preview.querySelector('.remove-btn').setAttribute('data-index', idx);
                });
            });
        };
        
        reader.readAsDataURL(file);
    }
    
    // Reset file input
    fileInput.value = '';
    
    if (uploadedImages.length > 0) {
        showStatus(`Added ${uploadedImages.length} image(s). First image will be used as display.`, 'success');
    }
}

// Setup mobile menu
function setupMobileMenu() {
    mobileToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileToggle.querySelector('i').classList.add('fa-bars');
            mobileToggle.querySelector('i').classList.remove('fa-times');
        });
    });
}

// Animate statistics counter
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            stat.textContent = target === 4.9 ? current.toFixed(1) : Math.floor(current);
        }, 16);
    });
}

// Setup scroll indicator
function setupScrollIndicator() {
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const categoriesSection = document.getElementById('categories');
            if (categoriesSection) {
                categoriesSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            const categoriesSection = document.getElementById('categories');
            if (categoriesSection) {
                categoriesSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// Setup all event listeners
function setupEventListeners() {
    // Category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            filterCollections(category);
            
            // Smooth scroll to collections if needed
            const collectionsSection = document.getElementById('categories');
            const headerHeight = 100;
            const sectionPosition = collectionsSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'
            });
        });
    });

    // Upload triggers
    const uploadTriggers = [uploadHeader, uploadMobile, uploadFooter];
    uploadTriggers.forEach(trigger => {
        if (trigger) {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                showUploadSection();
            });
        }
    });

    closeUpload.addEventListener('click', hideUploadSection);

    // Close upload section when clicking outside
    uploadSection.addEventListener('click', (e) => {
        if (e.target === uploadSection) {
            hideUploadSection();
        }
    });

    // File upload
    browseFiles.addEventListener('click', () => fileInput.click());
    uploadDropzone.addEventListener('click', () => fileInput.click());

    // Drag and drop
    uploadDropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadDropzone.style.borderColor = 'var(--accent)';
        uploadDropzone.style.transform = 'scale(1.02)';
    });

    uploadDropzone.addEventListener('dragleave', () => {
        uploadDropzone.style.borderColor = 'var(--border)';
        uploadDropzone.style.transform = 'scale(1)';
    });

    uploadDropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadDropzone.style.borderColor = 'var(--border)';
        uploadDropzone.style.transform = 'scale(1)';
        handleFiles(e.dataTransfer.files);
    });

    fileInput.addEventListener('change', () => handleFiles(fileInput.files));

    // Form submission
    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (uploadedImages.length === 0) {
            showStatus('Please upload at least one image.', 'error');
            return;
        }
        
        // Get form data
        const formData = {
            designName: document.getElementById('designName').value,
            designerName: document.getElementById('designerName').value,
            category: document.getElementById('category').value,
            price: document.getElementById('price').value,
            description: document.getElementById('description').value,
            tags: document.getElementById('tags').value
        };
        
        // Validate
        if (!formData.category) {
            showStatus('Please select a category.', 'error');
            return;
        }
        
        // Show loading
        showStatus('<i class="fas fa-spinner fa-spin"></i> Publishing your outfit...', 'loading');
        
        // Simulate upload (in real app, this would upload to server)
        setTimeout(() => {
            // Use the first uploaded image as display image
            const reader = new FileReader();
            reader.onload = function(e) {
                // Add the new outfit to the grid
                addNewOutfit(formData, e.target.result);
                
                // Success message
                showStatus(`
                    <div style="background: rgba(0,255,0,0.1); padding: 20px; border-radius: 12px; border: 1px solid rgba(0,255,0,0.3);">
                        <h4 style="color: #4CAF50; margin-bottom: 10px;"><i class="fas fa-check-circle"></i> Outfit Published!</h4>
                        <p>"${formData.designName}" is now live in our collections.</p>
                        <p style="font-size: 14px; margin-top: 10px; opacity: 0.8;">Users can now view and purchase your design.</p>
                    </div>
                `, 'success');
                
                // Reset form
                uploadForm.reset();
                uploadedImages = [];
                imagePreview.innerHTML = '';
                
                // Hide upload section after 2 seconds
                setTimeout(() => {
                    hideUploadSection();
                    setTimeout(() => uploadStatus.innerHTML = '', 500);
                }, 2000);
            };
            
            reader.readAsDataURL(uploadedImages[0]);
        }, 1500);
    });

    // Clear form
    clearForm.addEventListener('click', function() {
        if (confirm('Clear all form data and images?')) {
            uploadForm.reset();
            uploadedImages = [];
            imagePreview.innerHTML = '';
            uploadStatus.innerHTML = '';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            const targetId = this.getAttribute('href');
            if (targetId === '#upload') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Show upload section
function showUploadSection() {
    uploadSection.style.display = 'block';
    document.body.style.overflow = 'hidden';
    uploadSection.style.opacity = '0';
    setTimeout(() => {
        uploadSection.style.transition = 'opacity 0.3s ease';
        uploadSection.style.opacity = '1';
        mobileMenu.classList.remove('active');
        if (mobileToggle) {
            mobileToggle.querySelector('i').classList.add('fa-bars');
            mobileToggle.querySelector('i').classList.remove('fa-times');
        }
    }, 10);
}

// Hide upload section
function hideUploadSection() {
    uploadSection.style.opacity = '0';
    setTimeout(() => {
        uploadSection.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Show status messages
function showStatus(message, type) {
    const colors = {
        'error': '#ff4757',
        'loading': 'var(--accent)',
        'success': '#4CAF50'
    };
    uploadStatus.innerHTML = `<p style="color: ${colors[type] || 'inherit'}">${message}</p>`;
    
    if (type === 'error') {
        setTimeout(() => uploadStatus.innerHTML = '', 5000);
    }
}

// Animate cards on scroll
function animateCards() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.collection-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', init);
   