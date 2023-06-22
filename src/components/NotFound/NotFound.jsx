import { Message, TextLink, Text, Trace, Wheels, Body, Rover, Flag, Crater, Planet, Section } from "./NotFound.styled"

const NotFound = () => {
    return <Section>
        <Planet class="planet">
            <Crater class="crater"></Crater>
            <Crater class="crater"></Crater>
            <Crater class="crater"></Crater>
            <Crater class="crater"></Crater>
            <Crater class="crater"></Crater>
            <Rover Rover="rover">
                <Body class="body"></Body>
                <Wheels class="wheels"></Wheels>
                <Trace></Trace>
            </Rover>
            <Flag class="flag">
                404
            </Flag>
        </Planet>
        <Message>
            <Text>
                There is no life, try to find <TextLink to="/">something else</TextLink>
            </Text>
        </Message>
    </Section>
}

export default NotFound;