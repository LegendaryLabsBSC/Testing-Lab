import React, { useState } from "react";
import {
  Flex,
  Text,
  Input,
  Stack,
  Radio,
  RadioGroup,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const Element = (props) => {

  const StringInputElement = () => (
    <Flex>
      <Input
        w="75%"
        id={props.name}
        label={props.name}
        {...props.register(props.name)}
        placeholder={`Enter ${props.name}`}
      />
    </Flex>
  )

  const RadioElement = () => (
    <Flex>
      <RadioGroup
        id={props.name}
        label={props.name}
        value={value.radio}
        onChange={(e) => updateValue(e, 'radio')}
      >
        <Stack direction="row">
          <Radio
            value={"false"}
            {...props.register(props.name)}
          >
            No
          </Radio>
          <Radio
            value={"true"}
            {...props.register(props.name)}
          >
            Yes
          </Radio>
        </Stack>
      </RadioGroup >
    </Flex>
  )

  const NumberInputElement = () => (
    <Flex>
      <NumberInput
        mr="2rem"
        maxW="100px"
        value={value.num}
        {...props.register(props.name)}
        onChange={(e) => updateValue(e, 'num')}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Flex>
  )



  const [value, setValue] = useState({
    radio: "false",
    num: 0
  })

  const updateValue = (val, type) => {
    setValue({
      ...value,
      [type]: val
    })
  }
  switch (props.type) {
    case "string":
    case "address":
      return (
        <StringInputElement />
      )
    case "bool":
      return (
        <RadioElement />
      );
    case "uint256":
      return (
        <NumberInputElement />
      )
    default:
      console.log(`Error: ${props.type} not supported`)
      return (
        <Text>
          {`Error: ${props.type} not supported`}
        </Text>
      )
  }
};

export default Element;
