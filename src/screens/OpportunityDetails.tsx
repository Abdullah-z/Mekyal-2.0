import React, {useCallback, useEffect, useState} from 'react';

import {useData, useTheme, useTranslation} from '../hooks/';
import {Block, Button, Text} from '../components/';
import VideoPlayer from './VideoPlayer';
import {ScrollView} from 'react-native-gesture-handler';
import TabDetail from '../components/TabDetail';
import TabDocuments from '../components/TabDocuments';
import TabInvestNow from '../components/TabInvestNow';
import {useNavigation} from '@react-navigation/core';
import {REACT_APP_API_URL} from '../services/common-data-service';
import axios from 'axios';

const OpportunityDetails = ({route, navigation}) => {
  const {t} = useTranslation();
  const {id, otherParam} = route.params;
  const {colors, fonts, sizes} = useTheme();
  const [tab, setTab] = useState(0);

  const url = REACT_APP_API_URL + 'opportunity/get-by-id/' + id;

  const [opportunityDetails, setOpportunityDetails] = useState([]);

  const fetchDetils = async () => {
    const {data} = await axios.get(url);

    const NewData = JSON.parse(data.Content);
    setOpportunityDetails(NewData.Detail);
  };

  useEffect(() => {
    fetchDetils();
  }, []);

  return (
    <>
      <ScrollView>
        <Block margin={sizes.sm}>
          <VideoPlayer link={'X_9VoqR5ojM'} />
        </Block>
        <Block color={'#f8f9fa'}>
          <Block row align="center" justify="center" color={'#f8f9fa'}>
            <Button onPress={() => setTab(0)}>
              <Block row align="center">
                <Text
                  color={'#00a69c'}
                  style={
                    tab === 0
                      ? {textDecorationLine: 'underline'}
                      : {textDecorationLine: 'none'}
                  }
                  font={fonts?.[tab === 0 ? 'medium' : 'normal']}>
                  {t('common.details')}
                </Text>
              </Block>
            </Button>

            <Block
              gray
              flex={0}
              width={1}
              marginHorizontal={sizes.sm}
              height={sizes.socialIconSize}
            />
            <Button onPress={() => setTab(1)}>
              <Block row align="center">
                <Text
                  p
                  color={'#00a69c'}
                  style={
                    tab === 1
                      ? {textDecorationLine: 'underline'}
                      : {textDecorationLine: 'none'}
                  }
                  font={fonts?.[tab === 1 ? 'medium' : 'normal']}>
                  {t('common.documents')}
                </Text>
              </Block>
            </Button>

            <Block
              gray
              flex={0}
              width={1}
              marginHorizontal={sizes.sm}
              height={sizes.socialIconSize}
            />
            <Button onPress={() => setTab(2)}>
              <Block row align="center">
                <Text
                  p
                  color={'#00a69c'}
                  style={
                    tab === 2
                      ? {textDecorationLine: 'underline'}
                      : {textDecorationLine: 'none'}
                  }
                  font={fonts?.[tab === 2 ? 'medium' : 'normal']}>
                  {t('common.investnow')}
                </Text>
              </Block>
            </Button>
          </Block>

          <Block align="center">
            {tab === 1 ? (
              <TabDocuments
                aboutCompanyURL={opportunityDetails.AboutCompanyURL}
                teamURL={opportunityDetails.TeamURL}
                financialRatioURL={opportunityDetails.FinancialRatioURL}
                riskURL={opportunityDetails.RiskURL}
                prospectusURL={opportunityDetails.ProspectusURL}
              />
            ) : tab === 2 ? (
              <TabInvestNow />
            ) : (
              <TabDetail
                name={opportunityDetails.Name}
                nameArabic={opportunityDetails.NameArabic}
                description={opportunityDetails.Description}
                descriptionArabic={opportunityDetails.DescriptionArabic}
                header={opportunityDetails.HeaderUrl}
                logo={opportunityDetails.LogoUrl}
                category={opportunityDetails.Category}
                categoryArabic={opportunityDetails.CategoryArabic}
                sharePrice={opportunityDetails.SharePrice}
                valuation={opportunityDetails.ValuationPrice}
                investors={opportunityDetails.InvestorCount}
                raisedAmount={opportunityDetails.FundAcquired}
                targetAmount={opportunityDetails.InvestmentRequired}
                remainingDays={opportunityDetails.DaysRemaining}
                subavg={opportunityDetails.AvgSubscrition}
                submin={opportunityDetails.MinSubscrition}
                submax={opportunityDetails.MaxSubscrition}
                sharesmin={opportunityDetails.MinSharesSubscription}
                sharesmax={opportunityDetails.MaxSharesSubscriptionRetail}
                endDate={opportunityDetails.EndDate}
                startDate={opportunityDetails.StartDate}
              />
            )}
          </Block>
        </Block>
      </ScrollView>
    </>
  );
};

export default OpportunityDetails;
