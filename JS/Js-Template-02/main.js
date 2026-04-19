const buttons = document.querySelectorAll('.shuffle li');
        const items = document.querySelectorAll('.imgs-container .box');

        let activeFilter = 'all';

        buttons.forEach(button => {

            // Click
            button.addEventListener('click', () => {
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                activeFilter = button.dataset.filter;
                filterItems(activeFilter);
            });

            // Hover preview
            button.addEventListener('mouseenter', () => {
                const hoverFilter = button.dataset.filter;
                filterItems(hoverFilter);
            });

            // رجوع للحالة المثبتة
            button.addEventListener('mouseleave', () => {
                filterItems(activeFilter);
            });

        });

        function filterItems(filter) {
            items.forEach(item => {

                if (filter === 'all' || item.classList.contains(filter)) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }

            });
        }
        function filterItems(filter) {
            items.forEach((item, index) => {

                if (filter === 'all' || item.classList.contains(filter)) {

                    item.classList.remove('hide');

                    // نحرك يمين وشمال
                    if (index % 2 === 0) {
                        item.classList.add('show-from-left');
                    } else {
                        item.classList.add('show-from-right');
                    }

                    // نرجعهم مكانهم بعد لحظة
                    setTimeout(() => {
                        item.classList.remove('show-from-left');
                        item.classList.remove('show-from-right');
                    }, 50);

                } else {
                    item.classList.add('hide');
                }

            });
        }