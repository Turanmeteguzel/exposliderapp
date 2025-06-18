import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";
import { Item } from "./data";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

type VerticalProps = {
  data: Item[];
};
type AnimatedCardProps = {
  item: Item;
  index: number;
  scrollY: SharedValue<number>;
};

const { height } = Dimensions.get("screen");
const _spacing = 8;
const _itemSize = height * 0.72;
const _itemFullSize = _itemSize + _spacing * 2;

function AnimatedCard({ item, index, scrollY }: AnimatedCardProps) {
  const stylez = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [index - 1, index, index + 1],
        [0.3, 1, 0.3]
      ),
      transform: [
        {
          scale: interpolate(
            scrollY.value,
            [index - 1, index, index + 1],
            [0.92, 1, 0.92]
          ),
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        {
          flex: 1,
          height: _itemSize,
          padding: _spacing * 2,
          borderRadius: 8,
          gap: _spacing,
        },
        stylez,
      ]}
    >
      <Image
        source={{ uri: item.author.avatar }}
        style={[StyleSheet.absoluteFillObject, { borderRadius: 12 }]}
        blurRadius={9}
      />
      <Image
        source={{ uri: item.Image.url }}
        style={{ flex: 1, height: _itemSize * 0.4 }}
      />
      <View style={{ gap: _spacing }}>
        <Text style={{ fontSize: 24, fontWeight: "700", color: "#fff" }}>
          {item.title}
        </Text>
        <Text style={{ color: "#ddd" }} numberOfLines={3}>
          {item.description}
        </Text>
      </View>
      <View
        style={{ flexDirection: "row", gap: _spacing, alignItems: "center" }}
      >
        <Image
          source={{ uri: item.author.avatar }}
          style={{ width: 24, aspectRatio: 1, borderRadius: 12 }}
        />
        <Text style={{ color: "#ddd" }}>{item.author.name}</Text>
      </View>
    </Animated.View>
  );
}

function VerticalList({ data }: VerticalProps) {
  const scrollY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler((e) => {
    scrollY.value = e.contentOffset.y / _itemFullSize;
  });
  return (
    <Animated.FlatList
      data={data}
      contentContainerStyle={{
        paddingHorizontal: _spacing * 3,
        paddingVertical: (height - _itemFullSize) / 2,
        gap: _spacing * 2,
      }}
      renderItem={({ item, index }) => (
        <AnimatedCard item={item} index={index} scrollY={scrollY} />
      )}
      snapToInterval={_itemFullSize}
      decelerationRate={"fast"}
      onScroll={onScroll}
      scrollEventThrottle={16}
    />
  );
}

export default VerticalList;
