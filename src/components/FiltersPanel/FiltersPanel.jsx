import { CategoryBtn } from './CategoryBtn/CategoryBtn';
import { UserFilterBtn } from './UserFilterTabs/UserFilterBtn';
import { ResetBtn } from './ResetBtn/ResetBtn';

export const FiltersPanel = ({
  categoriesArray,
  selectedCategoriesArray,
  handleToggleCategory,
  users,
  selectedUserId,
  setSelectedUserId,
}) => {
  return (
    <div className="block">
      <nav className="panel">
        <p className="panel-heading">Filters</p>
        {/* User buttons */}
        <UserFilterBtn
          usersFromServer={users}
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
        />
        {/* Search input */}

        {/* Category buttons */}
        <CategoryBtn
          categories={categoriesArray}
          selectedCategories={selectedCategoriesArray}
          onToggleCategory={handleToggleCategory}
        />
        {/* Reset button */}
        <ResetBtn />
      </nav>
    </div>
  );
};
