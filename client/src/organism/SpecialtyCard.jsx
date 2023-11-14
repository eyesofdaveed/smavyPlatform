import { Flexbox } from '@atoms';
import { Text } from '@atoms';
import { Card } from '@atoms';
import { sizes } from '@base';
import { colors } from '@base';
import { ValueBackround } from '@atoms';


export const SpecialtyCard = () => {
  return (
    <Card padding="30px" display="flex" width="fit-content" bgColor={colors.cardMainBg} >
      <Flexbox direction="column" gap="22px" align="start">
        <Flexbox justify="space-between" width="100%">
          <Text  color={colors.black} fontSize={sizes.medium} >Дата поступления</Text>
          <ValueBackround width='600px' margin="0px 3px 0px 40px" padding="5px 15px ">
            <Text  color={colors.black} fontSize={sizes.medium} >010722547645</Text>
          </ValueBackround>
        </Flexbox>
        <Flexbox justify="space-between" width="100%">
          <Text  color={colors.black} fontSize={sizes.medium} >Группа </Text>
          <ValueBackround width='600px' margin="0px 3px 0px 40px" padding="5px 15px ">
            <Text color={colors.black} fontSize={sizes.medium}>22-07-2001</Text>
          </ValueBackround >
        </Flexbox>
        <Flexbox justify="space-between" width="100%">
          <Text  color={colors.black} fontSize={sizes.medium} >Вид финансирования</Text>
          <ValueBackround width='600px' margin="0px 3px 0px 40px" padding="5px 15px ">
            <Text  color={colors.black} fontSize={sizes.medium}>Женский</Text>
          </ValueBackround>
        </Flexbox>
        <Flexbox justify="space-between" width="100%">
          <Text  color={colors.black} fontSize={sizes.medium} >Обучение по квоте</Text>
          <ValueBackround width='600px'margin="0px 3px 0px 40px" padding="5px 15px ">
            <Text  color={colors.black} fontSize={sizes.medium}>Женский</Text>
          </ValueBackround>
        </Flexbox>
        <Flexbox justify="space-between" width="100%">
          <Text  color={colors.black} fontSize={sizes.medium} >Серия свидетельства о гранте</Text>
          <ValueBackround width='600px' margin="0px 3px 0px 40px" padding="5px 15px ">
            <Text  color={colors.black} fontSize={sizes.medium}>Женский</Text>
          </ValueBackround>
        </Flexbox>
        <Flexbox justify="space-between" width="100%">
          <Text  color={colors.black} fontSize={sizes.medium} >Номер свидетельства о гранте</Text>
          <ValueBackround width='600px' margin="0px 3px 0px 40px" padding="5px 15px ">
            <Text  color={colors.black} fontSize={sizes.medium}>Женский</Text>
          </ValueBackround>
        </Flexbox>
        <Flexbox justify="space-between" width="100%">
          <Text  color={colors.black} fontSize={sizes.medium} >Дата присуждения гранта</Text>
          <ValueBackround width='600px' margin="0px 3px 0px 40px" padding="5px 15px ">
            <Text  color={colors.black} fontSize={sizes.medium}>Женский</Text>
          </ValueBackround>
        </Flexbox>
        <Flexbox justify="space-between" width="100%">
          <Text  color={colors.black} fontSize={sizes.medium} >Сетрификат гранта</Text>
          <ValueBackround width='600px' margin="0px 3px 0px 40px" padding="5px 15px ">
            <Text  color={colors.black} fontSize={sizes.medium}>Женский</Text>
          </ValueBackround>
        </Flexbox>
        
      </Flexbox>
    </Card>
  );
};