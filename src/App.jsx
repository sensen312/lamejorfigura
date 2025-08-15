import React, { useState, useRef } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Box,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Card,
  CardMedia,
  CardContent,
  Link,
  IconButton,
  Snackbar,
  Alert,
  Menu,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Facebook,
  Instagram,
  Storefront,
  Language,
  ContentCopy,
  Menu as MenuIcon,
} from "@mui/icons-material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#74061A",
    },
    secondary: {
      main: "#BFA89E",
    },
    background: {
      default: "#F9F9F9",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
    divider: "#E0E0E0",
  },
  typography: {
    fontFamily: '"Raleway", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: "1.8rem",
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: "1.6rem",
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: "1.4rem",
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
          borderRadius: "50px",
          transition: "all 0.3s ease-in-out",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
          },
        },
      },
    },
  },
});

const SectionContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  padding: "6rem 2rem",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  borderBottom: `1px solid ${theme.palette.divider}`,
  scrollSnapAlign: "start",
  "&:last-of-type": {
    borderBottom: "none",
  },
  [theme.breakpoints.down("md")]: {
    padding: "4rem 1rem",
  },
}));

const LightBackgroundSection = styled(SectionContainer)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const SectionTitle = styled(Typography)({
  marginBottom: "1rem",
  textAlign: "center",
});

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  maxWidth: "700px",
  textAlign: "center",
  marginBottom: "3rem",
  lineHeight: 1.7,
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  padding: "0.5rem 2rem",
  color: theme.palette.text.primary,
}));

const LogoTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  cursor: "pointer",
  color: theme.palette.primary.main,
}));

const NavLinksContainer = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    gap: "1.5rem",
    alignItems: "center",
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  opacity: 0.7,
  position: "relative",
  padding: "0.5rem",
  fontSize: "1rem",
  borderRadius: 0,
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: 0,
    height: "2px",
    background: theme.palette.primary.main,
    transition: "width 0.3s",
  },
  "&:hover": {
    opacity: 1,
    backgroundColor: "transparent",
    "&:after": {
      width: "100%",
    },
  },
}));

const LanguageButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: "0.5rem 1rem",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  color: theme.palette.text.secondary,
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.04)",
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
  },
}));

const HeroContentContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "100%",
  flexGrow: 1,
});

const HeroImageContainer = styled(Box)({
  width: "100%",
  maxWidth: "800px",
  maxHeight: "55vh",
  marginBottom: "2rem",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
});

const HeroImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

const HeroTagline = styled(Typography)({
  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
  margin: "0 0 0.5rem",
});

const HeroHours = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(1rem, 2vw, 1.1rem)",
  color: theme.palette.text.secondary,
  margin: "0 0 2rem",
}));

const HeroCTAButton = styled(Button)(({ theme }) => ({
  padding: "0.8rem 2.5rem",
  backgroundColor: theme.palette.primary.main,
  color: "white",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: `0 10px 20px ${theme.palette.primary.main}40`,
    backgroundColor: theme.palette.primary.dark,
  },
}));

const AboutContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "3rem",
  maxWidth: "900px",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    gap: "4rem",
  },
}));

const AboutImage = styled("img")(({ theme }) => ({
  width: "280px",
  height: "280px",
  borderRadius: "50%",
  objectFit: "cover",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  objectPosition: "50% 25%",
  flexShrink: 0,
}));

const AboutTextContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

const ContactLayoutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  width: "100%",
  maxWidth: "1200px",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    gap: "3rem",
    alignItems: "stretch",
  },
}));

const ContactCard = styled(Card)(({ theme }) => ({
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "500px",
  [theme.breakpoints.up("md")]: {
    flex: "1 1 45%",
    maxWidth: "none",
  },
}));

const ContactCopyButton = styled(IconButton)({
  marginLeft: "auto",
});

const MapContainer = styled(Box)(({ theme }) => ({
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  height: "400px",
  width: "100%",
  maxWidth: "500px",
  [theme.breakpoints.up("md")]: {
    flex: "1 1 55%",
    height: "auto",
    maxWidth: "none",
  },
}));

const MapIframe = styled("iframe")({
  border: "none",
  width: "100%",
  height: "100%",
});

const GalleryLayoutContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "2rem",
  width: "100%",
  maxWidth: "1200px",
});

const GalleryCardContainer = styled(Card)({
  display: "flex",
  flexDirection: "column",
});

const GalleryCardMedia = styled(CardMedia)({
  height: "400px",
  objectFit: "cover",
});

const GalleryDescription = styled(CardContent)(({ theme }) => ({
  textAlign: "center",
  fontStyle: "italic",
  backgroundColor: theme.palette.background.default,
}));

const DonationsLayoutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  width: "100%",
  maxWidth: "1000px",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    gap: "3rem",
  },
}));

const DonationCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "accepted",
})(({ accepted, theme }) => ({
  padding: "2rem",
  borderTop: `5px solid ${
    accepted ? theme.palette.success.main : theme.palette.error.main
  }`,
  flex: 1,
}));

const DonationListContainer = styled("ul")({
  padding: 0,
  listStyle: "none",
  margin: 0,
});

const DonationListItem = styled("li", {
  shouldForwardProp: (prop) => prop !== "accepted",
})(({ accepted, theme }) => ({
  marginBottom: "0.75rem",
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  "&::before": {
    content: accepted ? '"✓"' : '"✗"',
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    flexShrink: 0,
    backgroundColor: accepted
      ? theme.palette.success.light
      : theme.palette.error.light,
    color: accepted ? theme.palette.success.dark : theme.palette.error.dark,
    fontWeight: "bold",
  },
}));

const SocialButtonsFlexContainer = styled(Box)({
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
  justifyContent: "center",
  marginBottom: "3rem",
});

const SocialButton = styled(Button)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.75rem",
  padding: "0.7rem 1.5rem",
  textDecoration: "none",
  color: theme.palette.text.secondary,
  fontWeight: 500,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.04)",
    borderColor: theme.palette.text.primary,
    color: theme.palette.text.primary,
    transform: "translateY(-2px)",
  },
}));

const ReviewLinkButton = styled(HeroCTAButton)({
  marginTop: "3rem",
});

const CommunityVoicesTitle = styled(Typography)({
  textAlign: "center",
  marginTop: "2rem",
  marginBottom: "2rem",
});

const ReviewsFlexContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "2rem",
  width: "100%",
  maxWidth: "1200px",
});

const ReviewCard = styled(Card)(({ theme }) => ({
  padding: "2rem",
  borderLeft: `5px solid ${theme.palette.secondary.main}`,
  display: "flex",
  flexDirection: "column",
}));

const ReviewQuoteTypography = styled(Typography)({
  fontStyle: "italic",
  flexGrow: 1,
  marginBottom: "1rem",
});

const FooterContainer = styled("footer")(({ theme }) => ({
  textAlign: "center",
  padding: "3rem 2rem",
  backgroundColor: theme.palette.primary.main,
  color: "rgba(255, 255, 255, 0.9)",
  fontSize: "0.9rem",
  lineHeight: 1.6,
}));

const translations = {
  en: {
    storeName: "La Mejor Figura",
    tagline: "A Hidden Gem in Altamonte Springs",
    hoursSummary: (
      <>
        Open Weekdays <b>9 AM - 7 PM</b> & Weekends <b>9 AM - 6:30 PM</b>
      </>
    ),
    nav: {
      home: "Home",
      about: "About",
      contact: "Find Us",
      gallery: "Gallery",
      donations: "Donations",
      social: "Social",
    },
    addressLabel: "Our Location",
    googleMaps: "Google Maps",
    appleMaps: "Apple Maps",
    copySuccess: "Address copied!",
    copyTooltip: "Copy Address",
    galleryTitle: "A Glimpse Inside the Gem",
    donationsTitle: "Share Your Treasures",
    donationsIntro:
      "Your generous donations are the heart of our collection. By donating to us, you directly support a small, local business and give your items a second life. We look for pieces that are clean and in great shape, ready for their next story.",
    acceptedTitle: "What We're Looking For",
    acceptedItems: [
      "Stylish, gently used clothing & shoes",
      "Vintage & modern jewelry",
      "Handbags, watches, & accessories",
      "Unique housewares & decor",
      "Other unique finds",
    ],
    notAcceptedTitle: "What We Can't Accept",
    notAcceptedItems: [
      "Anything broken or stained",
      "Large furniture or appliances",
      "Trash",
    ],
    socialTitle: "Find Us Online",
    socialIntro:
      "Follow us on social media to see our latest arrivals and special promotions!",
    reviewsTitle: "Community Voices",
    leaveReview: "Add your voice, click here to leave a review!",
    contactTitle: "Visit The Store",
    hours: "Hours",
    weekdays: "Mon - Fri",
    weekends: "Sat & Sun",
    contactUs: "Contact Us",
    fbPage: "Facebook Page",
    instagram: "Instagram",
    marketplace: "Marketplace",
    footerCredit: "Website designed by a friend.",
    aboutTitle: "About the Store",
    aboutText:
      "This store is driven by the passion of its owner, Ruth, who creates a warm, welcoming, and friendly atmosphere for everyone. We believe in fair prices and the joy of hunting for treasures. Our boutique features a fantastic selection of unique finds, including clothing for all, stunning vintage jewelry, and unique accessories. Show your love for local business by visiting and saying hi to Ruth!",
  },
  es: {
    storeName: "La Mejor Figura",
    tagline: "Una Joya Escondida en Altamonte Springs",
    hoursSummary: (
      <>
        Abierto de Lunes a Viernes <b>9 AM - 7 PM</b> y Fines de Semana{" "}
        <b>9 AM - 6:30 PM</b>
      </>
    ),
    nav: {
      home: "Inicio",
      about: "Sobre",
      contact: "Visítanos",
      gallery: "Galería",
      donations: "Donaciones",
      social: "Social",
    },
    addressLabel: "Nuestra Ubicación",
    googleMaps: "Google Maps",
    appleMaps: "Apple Maps",
    copySuccess: "¡Dirección copiada!",
    copyTooltip: "Copiar Dirección",
    galleryTitle: "Un Vistazo a la Joya",
    donationsTitle: "Comparte Tus Tesoros",
    donationsIntro:
      "Sus generosas donaciones son el corazón de nuestra colección. Al donar con nosotros, apoya directamente a un pequeño negocio local y le da una segunda vida a sus artículos. Buscamos piezas que estén limpias y en excelente estado, listas para su próxima historia.",
    acceptedTitle: "Lo Que Buscamos",
    acceptedItems: [
      "Ropa y zapatos con estilo, poco uso",
      "Joyería vintage y moderna",
      "Bolsos, relojes y accesorios",
      "Artículos y decoración únicos para el hogar",
      "Otros hallazgos únicos",
    ],
    notAcceptedTitle: "Lo Que No Podemos Aceptar",
    notAcceptedItems: [
      "Artículos rotos o manchados",
      "Muebles o electrodomésticos grandes",
      "Basura",
    ],
    socialTitle: "Encuéntranos en Línea",
    socialIntro:
      "¡Síganos en las redes sociales para ver nuestras últimas novedades y promociones especiales!",
    reviewsTitle: "Voces de la Comunidad",
    leaveReview: "¡Añade tu voz, haz clic aquí para dejar una reseña!",
    contactTitle: "Visita La Tienda",
    hours: "Horario",
    weekdays: "Lun - Vie",
    weekends: "Sáb y Dom",
    contactUs: "Contáctenos",
    fbPage: "Página de Facebook",
    instagram: "Instagram",
    marketplace: "Marketplace",
    footerCredit: "Página web creada por un amigo.",
    aboutTitle: "Sobre la Tienda",
    aboutText:
      "Esta tienda es impulsada por la pasión de su dueña, Ruth, quien crea un ambiente cálido, acogedor y amigable para todos. Creemos en los precios justos y en la alegría de buscar tesoros. Nuestra boutique cuenta con una fantástica selección de hallazgos únicos, incluyendo ropa para todos, joyas vintage impresionantes y accesorios únicos. ¡Muestre su amor por los negocios locales visitando y saludando a Ruth!",
  },
};

const storeData = {
  address: "1109 E Altamonte Dr, Altamonte Springs, FL 32701",
  phone: "321 279 1878",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=La+Mejor+Figura+Altamonte+Springs",
  appleMapsUrl:
    "http://maps.apple.com/?q=1109+E+Altamonte+Dr,+Altamonte+Springs,+FL+32701",
  hours: { weekdays: "9:00 AM - 7:00 PM", weekends: "9:00 AM - 6:30 PM" },
  socials: {
    facebookPage: "https://www.facebook.com/lamejorfigura/",
    facebookMarketplace:
      "https://www.facebook.com/marketplace/profile/100000546253595/",
    instagram: "#",
  },
  heroImage: "/images/storefront.png",
  ruthImage: "/images/ruth.jpg",
  galleryItems: [
    {
      src: "/images/fashionclothes.jpg",
      en: "Discover unique and stylish outfits.",
      es: "Descubra atuendos únicos y con estilo.",
    },
    {
      src: "/images/jewelry.jpg",
      en: "A treasure trove of vintage accessories.",
      es: "Un tesoro de accesorios vintage.",
    },
    {
      src: "/images/homepiece.jpg",
      en: "Find the perfect piece for your home.",
      es: "Encuentre la pieza perfecta para su hogar.",
    },
  ],
  reviews: [
    {
      name: "Jennifer N.",
      quote:
        "Truly a hidden gem of a thrift store! We met Ruth... you could tell how much she cares about this store. True thrift store prices and an owner who cares. 10/10!!",
    },
    {
      name: "Jaklyn C.",
      quote: "This place is wonderful! GREAT PRICES and GREAT ITEMS!",
    },
    {
      name: "pcsisko",
      quote:
        "What a beautiful shop, very affordable. The owner is a Beautiful person... Very Friendly and welcoming. I highly recommend this thrift store.",
    },
    {
      name: "Julia",
      quote:
        "I literally love this place the owner is the sweetest lady ever I bring all my friends here very good selection for very good prices this place deserves 1 million customers!!!!",
    },
    {
      name: "Angela C.",
      quote:
        "It’s so cute in here and the owner is so sweet and helpful. I found lots of affordable clothes, jewelry and accessories! Everything is very fairly priced.",
    },
    {
      name: "Imogene D.",
      quote:
        "I love this thrift store and Ruth so much!! Her prices are amazing, her jewelry pieces are stunning, and her variety is unmatched... It’s a hidden gem.",
    },
  ],
};

const Header = ({ content, onNavClick, onLangChange, currentLang }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (id) => {
    onNavClick(id);
    handleMenuClose();
  };

  return (
    <StyledAppBar position="fixed" component="header">
      <Toolbar>
        <LogoTypography
          variant="h1"
          component="h1"
          onClick={() => onNavClick("home")}
        >
          {content.storeName}
        </LogoTypography>
        <NavLinksContainer component="nav">
          {Object.entries(content.nav).map(([key, value]) => (
            <NavButton key={key} onClick={() => onNavClick(key)}>
              {value}
            </NavButton>
          ))}
          <LanguageButton onClick={onLangChange} startIcon={<Language />}>
            {currentLang === "en" ? "Español" : "English"}
          </LanguageButton>
        </NavLinksContainer>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              style: {
                marginTop: "45px",
                borderRadius: "8px",
              },
            }}
          >
            {Object.entries(content.nav).map(([key, value]) => (
              <MenuItem key={key} onClick={() => handleMenuItemClick(key)}>
                {value}
              </MenuItem>
            ))}
            <MenuItem
              onClick={() => {
                onLangChange();
                handleMenuClose();
              }}
            >
              {currentLang === "en" ? "Español" : "English"}
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

const HeroSection = ({ content, onCtaClick, id, refProp }) => (
  <SectionContainer id={id} ref={refProp} component="section">
    <HeroContentContainer>
      <HeroImageContainer>
        <HeroImage
          src={storeData.heroImage}
          alt="A welcoming view of the La Mejor Figura thrift store"
        />
      </HeroImageContainer>
      <HeroTagline variant="h2" component="h2" color="textPrimary">
        {content.tagline}
      </HeroTagline>
      <HeroHours variant="body1">{content.hoursSummary}</HeroHours>
      <HeroCTAButton variant="contained" onClick={onCtaClick}>
        {content.nav.contact}
      </HeroCTAButton>
    </HeroContentContainer>
  </SectionContainer>
);

const AboutSection = ({ content, id, refProp }) => (
  <LightBackgroundSection id={id} ref={refProp} component="section">
    <AboutContentContainer>
      <AboutImage
        src={storeData.ruthImage}
        alt="Ruth, the owner of La Mejor Figura"
      />
      <AboutTextContainer>
        <SectionTitle variant="h2" component="h2">
          {content.aboutTitle}
        </SectionTitle>
        <Typography variant="body1" color="textSecondary">
          {content.aboutText}
        </Typography>
      </AboutTextContainer>
    </AboutContentContainer>
  </LightBackgroundSection>
);

const ContactSection = ({ content, id, refProp, onCopy }) => (
  <SectionContainer id={id} ref={refProp} component="section">
    <SectionTitle variant="h2" component="h2">
      {content.contactTitle}
    </SectionTitle>
    <ContactLayoutContainer>
      <ContactCard>
        <Typography variant="h5" component="h3" gutterBottom>
          {content.addressLabel}
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <Box>
            <Typography>{storeData.address.split(",")[0]}</Typography>
            <Typography>
              {storeData.address.split(",").slice(1).join(",").trim()}
            </Typography>
          </Box>
          <ContactCopyButton onClick={onCopy} title={content.copyTooltip}>
            <ContentCopy />
          </ContactCopyButton>
        </Box>
        <Box display="flex" gap={1} mb={4}>
          <Link
            href={storeData.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.googleMaps}
          </Link>
          <Typography>|</Typography>
          <Link
            href={storeData.appleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.appleMaps}
          </Link>
        </Box>

        <Typography variant="h5" component="h3" gutterBottom>
          {content.hours}
        </Typography>
        <Typography>
          <b>{content.weekdays}:</b> {storeData.hours.weekdays}
        </Typography>
        <Typography>
          <b>{content.weekends}:</b> {storeData.hours.weekends}
        </Typography>
      </ContactCard>
      <MapContainer>
        <MapIframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.498835388145!2d-81.3533610849169!3d28.67471998240166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e771a5a0344f6f%3A0x1bda918f4c2049d1!2sLa%20Mejor%20Figura!5e0!3m2!1sen!2sus!4v1663456789123!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Store Location Map"
        />
      </MapContainer>
    </ContactLayoutContainer>
  </SectionContainer>
);

const GallerySection = ({ content, id, refProp, lang }) => (
  <LightBackgroundSection id={id} ref={refProp} component="section">
    <SectionTitle variant="h2" component="h2">
      {content.galleryTitle}
    </SectionTitle>
    <GalleryLayoutContainer>
      {storeData.galleryItems.map((item, index) => (
        <GalleryCardContainer key={index}>
          <GalleryCardMedia
            component="img"
            image={item.src}
            alt={`Gallery item ${index + 1}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x800/d7ccc8/3e2723?text=Image+Not+Found";
            }}
          />
          <GalleryDescription>
            <Typography variant="body2" color="textSecondary">
              {item[lang]}
            </Typography>
          </GalleryDescription>
        </GalleryCardContainer>
      ))}
    </GalleryLayoutContainer>
  </LightBackgroundSection>
);

const DonationsSection = ({ content, id, refProp }) => (
  <SectionContainer id={id} ref={refProp} component="section">
    <SectionTitle variant="h2" component="h2">
      {content.donationsTitle}
    </SectionTitle>
    <SectionSubtitle>{content.donationsIntro}</SectionSubtitle>
    <DonationsLayoutContainer>
      <DonationCard accepted>
        <Typography variant="h5" component="h3" align="center" gutterBottom>
          {content.acceptedTitle}
        </Typography>
        <DonationListContainer>
          {content.acceptedItems.map((item) => (
            <DonationListItem key={item} accepted>
              {item}
            </DonationListItem>
          ))}
        </DonationListContainer>
      </DonationCard>
      <DonationCard accepted={false}>
        <Typography variant="h5" component="h3" align="center" gutterBottom>
          {content.notAcceptedTitle}
        </Typography>
        <DonationListContainer>
          {content.notAcceptedItems.map((item) => (
            <DonationListItem key={item} accepted={false}>
              {item}
            </DonationListItem>
          ))}
        </DonationListContainer>
      </DonationCard>
    </DonationsLayoutContainer>
  </SectionContainer>
);

const SocialSection = ({ content, id, refProp }) => (
  <LightBackgroundSection id={id} ref={refProp} component="section">
    <SectionTitle variant="h2" component="h2">
      {content.socialTitle}
    </SectionTitle>
    <SectionSubtitle>{content.socialIntro}</SectionSubtitle>
    <SocialButtonsFlexContainer>
      <SocialButton
        href={storeData.socials.facebookPage}
        target="_blank"
        startIcon={<Facebook />}
      >
        {content.fbPage}
      </SocialButton>
      <SocialButton
        href={storeData.socials.instagram}
        target="_blank"
        startIcon={<Instagram />}
      >
        {content.instagram}
      </SocialButton>
      <SocialButton
        href={storeData.socials.facebookMarketplace}
        target="_blank"
        startIcon={<Storefront />}
      >
        {content.marketplace}
      </SocialButton>
    </SocialButtonsFlexContainer>

    <CommunityVoicesTitle variant="h3" component="h3">
      {content.reviewsTitle}
    </CommunityVoicesTitle>
    <ReviewsFlexContainer>
      {storeData.reviews.map((review, index) => (
        <ReviewCard key={index}>
          <ReviewQuoteTypography color="textSecondary">
            “{review.quote}”
          </ReviewQuoteTypography>
          <Typography fontWeight="bold" align="right">
            — {review.name}
          </Typography>
        </ReviewCard>
      ))}
    </ReviewsFlexContainer>
    <ReviewLinkButton href={storeData.googleMapsUrl} target="_blank">
      {content.leaveReview}
    </ReviewLinkButton>
  </LightBackgroundSection>
);

const Footer = ({ content }) => (
  <FooterContainer>
    <Typography>
      {content.contactUs}: {storeData.phone}
    </Typography>
    <Typography variant="body2" sx={{ opacity: 0.7 }}>
      {content.footerCredit}
    </Typography>
  </FooterContainer>
);

export default function App() {
  const [language, setLanguage] = useState("en");
  const [copySuccess, setCopySuccess] = useState(false);
  const content = translations[language];

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    contact: useRef(null),
    gallery: useRef(null),
    donations: useRef(null),
    social: useRef(null),
  };

  const scrollToSection = (id) => {
    sectionRefs[id].current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(storeData.address).then(
      () => {
        setCopySuccess(true);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setCopySuccess(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
        }}
      >
        <Header
          content={content}
          onNavClick={scrollToSection}
          onLangChange={() => setLanguage((l) => (l === "en" ? "es" : "en"))}
          currentLang={language}
        />
        <main>
          <SectionContainer
            id="home"
            ref={sectionRefs.home}
            component="section"
          >
            <HeroContentContainer>
              <HeroImageContainer>
                <HeroImage
                  src={storeData.heroImage}
                  alt="A welcoming view of the La Mejor Figura thrift store"
                />
              </HeroImageContainer>
              <HeroTagline variant="h2" component="h2" color="textPrimary">
                {content.tagline}
              </HeroTagline>
              <HeroHours variant="body1">{content.hoursSummary}</HeroHours>
              <HeroCTAButton
                variant="contained"
                onClick={() => scrollToSection("contact")}
              >
                {content.nav.contact}
              </HeroCTAButton>
            </HeroContentContainer>
          </SectionContainer>
          <AboutSection
            content={content}
            id="about"
            refProp={sectionRefs.about}
          />
          <ContactSection
            content={content}
            id="contact"
            refProp={sectionRefs.contact}
            onCopy={handleCopyAddress}
          />
          <GallerySection
            content={content}
            id="gallery"
            refProp={sectionRefs.gallery}
            lang={language}
          />
          <DonationsSection
            content={content}
            id="donations"
            refProp={sectionRefs.donations}
          />
          <SocialSection
            content={content}
            id="social"
            refProp={sectionRefs.social}
          />
        </main>
        <Footer content={content} />
        <Snackbar
          open={copySuccess}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            variant="filled"
          >
            {content.copySuccess}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
}
