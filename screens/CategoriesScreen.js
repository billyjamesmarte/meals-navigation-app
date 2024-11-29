import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
// navigation hook when not using navigation prop
// when having deep nesting of navigators
import { useNavigation } from "@react-navigation/native";

import { CATEGORIES } from "../data/dummy-data";

function CategoryScreen({ navigation }) {
  // navigation hook
  // const navigation = useNavigation();

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoryScreen;
