import {Grid, GridItem} from '@chakra-ui/react';
import SideNav from '../components/SideNav';
import MainOutletContainer from './MainOutletContainer';

const RootLayout = () => {
    return (
        <Grid
            templateAreas={`"aside main"`}
            gridTemplateColumns={"2fr 5fr"}
            gap={"0"}
            height={"100vh"}
            width={"100vw"}
            // backgroundImage={bg}
        >
            <GridItem
                area={"aside"}
                as={'header'}
                borderRight={"1px solid "}
                borderRightColor={"blackAlpha.300"}
            >
                <SideNav/>
            </GridItem>
            <GridItem
                area={"main"}
                as={'main'}
            >
                <MainOutletContainer/>
            </GridItem>
        </Grid>
    );
};

export default RootLayout;