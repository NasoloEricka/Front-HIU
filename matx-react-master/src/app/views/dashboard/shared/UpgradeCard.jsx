import { Button, Card, styled } from '@mui/material';
import { convertHexToRGB } from 'app/utils/utils';

const CardRoot = styled(Card)(({ theme }) => ({
  marginBottom: '24px',
  padding: '24px !important',
  [theme.breakpoints.down('sm')]: { paddingLeft: '16px !important' },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  position: 'relative',
  padding: '24px !important',
  background: `rgb(${convertHexToRGB(theme.palette.primary.main)}, 0.15) !important`,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

const Paragraph = styled('p')(({ theme }) => ({
  margin: 0,
  paddingTop: '24px',
  paddingBottom: '24px',
  color: theme.palette.text.secondary,
}));

const UpgradeCard = () => {
  return (
    <CardRoot>
      <StyledCard elevation={0}>
        <img src="/assets/images/illustrations/upgrade.svg" alt="upgrade" />

        <Paragraph>
          Etudier sur <b>Study-Hub</b> pour <br /> monter en flèche vos résultats scolaires
        </Paragraph>

      </StyledCard>
    </CardRoot>
  );
};

export default UpgradeCard;
