import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';

import Sidebar from './Sidebar';
import Footer from './Footer';

const sections = [
  { title: 'Culture', url: '#' }, 
  { title: 'Business', url: 'https://3000-zaynahahmad-myblog-mif836z7pa0.ws-us54.gitpod.io/Business' },
  
];

const mainFeaturedPost = {
  title: 'Barclays at work',
  description:
    "Contributing to their delaware community, A big world needs a big bank.",
  image: 'https://www.desu.edu/sites/hub/files/styles/inline_1120/public/0_0_b_barclay_dsu_contigent_2400.jpg?itok=LfCJPkRr',
  imageText: 'main image description',
};

const featuredPosts = [
  {
    title: 'Featured post Adam Ahmad',
    date: 'Nov 30',
    description:
      'Igpay Atinlay isyay ayay onstructedcay anguagelay amegay erewhay ordsway fyay anyay Englishyay ordway, ovesmay ityay otay ethay endyay ofyay ethay ordway',
    image: 'https://media-exp1.licdn.com/dms/image/C5622AQGv6ABBy5XnxQ/feedshare-shrink_2048_1536/0/1655246823557?e=1661990400&v=beta&t=FOyAYR_IydIu9gJ7yk7wYERSWj7wktelUzwTQJndr48',
    imageLabel: 'Image Text',
  
    
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://media-exp1.licdn.com/dms/image/C5622AQF3gc5ZOpZeRQ/feedshare-shrink_800/0/1655246824483?e=1661990400&v=beta&t=4VRo1zEyTxJA8WGJfhvH8YavQbapIiFNwQukQkoDOdI',
    imageLabel: 'Image Text',
  },
];


const sidebar = {
  title: 'About',
  description: 'From funding the world',
  archives:[
    { title: 'March 2020', url: '#' }
  ],
  social: [
    { name: 'Instagram', icon: InstagramIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Barclays Invests In the community " sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}