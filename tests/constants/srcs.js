export const SRCS = {
  default: 'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?fit=crop&w=500',
  zoom: 'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?fit=crop&w=1000',
  sources: [
    {
      srcSet: 'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?fit=crop&w=750, https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?fit=crop&w=1500 2x',
      media: '(min-width: 768px)'
    }, {
      srcSet: 'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?fit=crop&w=1000, https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?fit=crop&w=2000 2x',
      media: '(min-width: 1024px)'
    }
  ],
  invalidSources: [
    {
      srcSet: 'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?fit=crop&w=750, https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?fit=crop&w=1500 2x',
      media: '(min-width: 768px)'
    }, {
      media: '(min-width: 1024px)'
    }
  ]
};